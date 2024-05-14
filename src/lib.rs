use near_sdk::Timestamp;
use near_sdk::{env, near, near_bindgen, AccountId};

#[near(serializers=[borsh, json])]
#[derive(Clone)]
pub struct Poll {
    id: i32,
    pub creator: AccountId,
    created_at: Timestamp,
    title: String,
    estimated_budget: u128,
    pub total_votes: i64,
    description: String,
    pub votes: Vec<String>,
}

impl Poll {
    pub fn new(id: i32, title: String, estimated_budget: u128, description: String) -> Self {
        Poll {
            id,
            creator: env::signer_account_id(),
            created_at: env::block_timestamp(),
            title,
            estimated_budget,
            total_votes: 0,
            description,
            votes: vec![],
        }
    }
}

#[near(contract_state)]
pub struct Contract {
    owner: AccountId,
    polls: Vec<Poll>,
}

impl Default for Contract {
    fn default() -> Self {
        Self {
            owner: env::current_account_id(),
            polls: Vec::new(),
        }
    }
}

#[near_bindgen]
impl Contract {
    #[init]
    pub fn new(owner: AccountId) -> Self {
        let polls: Vec<Poll> = Vec::new();
        Contract { owner, polls }
    }

    pub fn add_poll(&mut self, title: String, estimated_budget: u128, description: String) {
        let id = self.polls.len() as i32;
        self.polls
            .push(Poll::new(id, title, estimated_budget, description));
        env::log_str("New poll added!");
    }

    pub fn list_polls(&self) -> Vec<Poll> {
        self.polls.to_vec()
    }

    pub fn poll_count(&mut self) -> usize {
        self.polls.len()
    }

    pub fn add_vote(&mut self, id: usize) {
        let poll: &mut Poll = self.polls.get_mut(id).unwrap();
        let voter = env::predecessor_account_id();
        poll.total_votes += 1;
        env::log_str("Vote submitted successfully!");
        poll.votes.push(voter.to_string());
    }

    pub fn get_total_votes(&mut self, id: usize) -> u64 {
        let poll: &mut Poll = self.polls.get_mut(id).unwrap();
        poll.total_votes.try_into().unwrap()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use near_sdk::test_utils::VMContextBuilder;
    use near_sdk::testing_env;

    fn get_context(predecessor: AccountId) -> VMContextBuilder {
        let mut builder = VMContextBuilder::new();
        builder.predecessor_account_id(predecessor);
        builder
    }

    #[test]
    fn add_poll_and_vote() {
        let alice: AccountId = "alice.testnet".parse().unwrap();
        let context = get_context(alice.clone());
        testing_env!(context.build());
        let mut contract = Contract::new(alice);
        contract.add_poll(
            "New Art Exhibition".to_string(),
            200,
            "Exciting showcase of contemporary artworks.".to_string(),
        );
        contract.add_vote(0);
        let result = contract.get_total_votes(0);
        assert_eq!(result, 1);
    }
}
