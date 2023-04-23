const contracts = {
  31337: [
    {
      name: "localhost",
      chainId: "31337",
      contracts: {
        SubmissionAVLTree: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "votes",
                  type: "uint256",
                },
              ],
              name: "addVotes",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "submitter",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "submissionText",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "threshold",
                  type: "uint256",
                },
              ],
              name: "add_submission",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
              ],
              name: "findSubmission",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllSubmissions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "submissionHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "submissionText",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votes",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "submitter",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "threshhold",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "funded",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "height",
                      type: "int256",
                    },
                    {
                      internalType: "uint256",
                      name: "left",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "right",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SubmissionAVLTree.SubmissionInfo[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
              ],
              name: "getSubmission",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "submissionHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "submissionText",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votes",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "submitter",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "threshhold",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "funded",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "height",
                      type: "int256",
                    },
                    {
                      internalType: "uint256",
                      name: "left",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "right",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SubmissionAVLTree.SubmissionInfo",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "inOrderTraversal",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "submissionHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "submissionText",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votes",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "submitter",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "threshhold",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "funded",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "height",
                      type: "int256",
                    },
                    {
                      internalType: "uint256",
                      name: "left",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "right",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SubmissionAVLTree.SubmissionInfo[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "root",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "status",
                  type: "bool",
                },
              ],
              name: "setThresholdCrossed",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "votes",
                  type: "uint256",
                },
              ],
              name: "subVotes",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "submissionFunderBalances",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "submissions",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "submissionText",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "votes",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "submitter",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "threshhold",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "funded",
                  type: "bool",
                },
                {
                  internalType: "int256",
                  name: "height",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "left",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "right",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "submissionHash",
                  type: "bytes32",
                },
              ],
              name: "thresholdCrossed",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "funder",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "balances",
                  type: "uint256",
                },
              ],
              name: "updateFunderBalance",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "submissionContract",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "NotAdmin",
              type: "error",
            },
            {
              inputs: [],
              name: "NotEnoughFunds",
              type: "error",
            },
            {
              inputs: [],
              name: "NotYourVote",
              type: "error",
            },
            {
              inputs: [],
              name: "RefundAlreadyClaimed",
              type: "error",
            },
            {
              inputs: [],
              name: "RefundDoesntExist",
              type: "error",
            },
            {
              inputs: [],
              name: "RewardsAlreadyDistributed",
              type: "error",
            },
            {
              inputs: [],
              name: "RewardsNotDistributed",
              type: "error",
            },
            {
              inputs: [],
              name: "SubmissionAlreadyMade",
              type: "error",
            },
            {
              inputs: [],
              name: "SubmissionDoesntExist",
              type: "error",
            },
            {
              inputs: [],
              name: "SubmissionPeriodActive",
              type: "error",
            },
            {
              inputs: [],
              name: "SubmissionPeriodNotActive",
              type: "error",
            },
            {
              inputs: [],
              name: "VotingPeriodActive",
              type: "error",
            },
            {
              inputs: [],
              name: "VotingPeriodNotActive",
              type: "error",
            },
            {
              inputs: [],
              name: "PLATFORM_ADDRESS",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "addFunds",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "submitter",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "submissionText",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "threshold",
                  type: "uint256",
                },
              ],
              name: "addSubmission",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "addressRefunded",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "admins",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_previous_submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "_new_submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "change_vote",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              name: "check_refund_amount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "_refundAmount",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              name: "claimRefund",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "distributed",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "end_submission_period",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "end_voting_period",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "funderVotes",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "funders",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllSubmissions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "submissionHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "submissionText",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "votes",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "submitter",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "threshhold",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "funded",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "height",
                      type: "int256",
                    },
                    {
                      internalType: "uint256",
                      name: "left",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "right",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct SubmissionAVLTree.SubmissionInfo[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "get_submission_time",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "get_voting_time",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "platform_reward",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "refunded",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_submission_time",
                  type: "uint256",
                },
              ],
              name: "start_submission_period",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_voting_time",
                  type: "uint256",
                },
              ],
              name: "start_voting_period",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "total_funds",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "total_rewards",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_submissionHash",
                  type: "bytes32",
                },
              ],
              name: "use_unused_votes",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_submissionHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "vote",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
