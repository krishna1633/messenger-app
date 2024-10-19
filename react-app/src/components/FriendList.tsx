import { Friend } from "../Types";

interface FriendListProps {
  friends: Friend[];
  setSelectedFriend: (friendId: number) => void;
  selectedFriendId: number | null;
}

function FriendList(props: FriendListProps) {
  const { friends, setSelectedFriend, selectedFriendId } = props;

  return (
    <div>
      <h3>Friends</h3>
      <ul>
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              <button
                onClick={() => {
                  setSelectedFriend(friend.id);
                }}
                style={{
                  backgroundColor:
                    selectedFriendId === friend.id ? "#ccc" : "#fff",
                }}
              >
                {friend.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FriendList;
