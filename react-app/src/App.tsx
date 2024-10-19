import { useState, useEffect } from 'react';
import FriendList from './components/FriendList';
import ChatWindow from './components/Chat';
import { Friend, Message } from './Types';
import { fetchFriends, fetchChatHistory, sendChatMessage } from './API';

function App() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [selectedFriendId, setSelectedFriendId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getFriends = async () => {
      try {
        setLoading(true);
        const fetchedFriends = await fetchFriends();
        setFriends(fetchedFriends);
        setSelectedFriendId(fetchedFriends[0].id);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch friend list');
        setLoading(false);
      }
    };

    getFriends();
  }, []);

  useEffect(() => {
    if (selectedFriendId !== null) {
      const getChatHistory = async () => {
        try {
          setLoading(true);
          const fetchedMessages = await fetchChatHistory(selectedFriendId);
          setMessages(fetchedMessages);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch chat history');
          setLoading(false);
        }
      };

      getChatHistory();
    }
  }, [selectedFriendId]);

  const handleSendMessage = async (content: string) => {
    if (selectedFriendId !== null) {
      try {
        const newMessage = await sendChatMessage(selectedFriendId, content);
        setMessages([...messages, newMessage]);
      } catch (err) {
        setError('Failed to send message');
      }
    }
  };


  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div style={{ display: 'flex' }}>
          <FriendList
            friends={friends}
            setSelectedFriend={setSelectedFriendId}
            selectedFriendId={selectedFriendId}
          />
          {selectedFriendId !== null && (
            <ChatWindow
              friendId={selectedFriendId}
              friendName={friends.find((friend) => friend.id === selectedFriendId)?.name || ''}
              messages={messages}
              onSendMessage={handleSendMessage}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
