import { useState, useEffect, useRef } from 'react';
import React from 'react';
import Pill from './Pill';
import {
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Grid,
} from '@mui/material';

const MultiselectorInbox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    const fetchUsers = () => {
      setActiveSuggestion(0);
      if (searchTerm.trim() === '') {
        setSuggestions([]);
        return;
      }

      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
        .catch((err) => {
          console.error(err);
        });
    };

    fetchUsers();
  }, [searchTerm]);

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    setSearchTerm('');
    setSuggestions([]);
    inputRef.current.focus();
  };

  const handleRemoveUser = (user) => {
    const updatedUsers = selectedUsers.filter(
      (selectedUser) => selectedUser.id !== user.id
    );
    setSelectedUsers(updatedUsers);

    const updatedEmails = new Set(selectedUserSet);
    updatedEmails.delete(user.email);
    setSelectedUserSet(updatedEmails);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === 'Backspace' &&
      e.target.value === '' &&
      selectedUsers.length > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemoveUser(lastUser);
      setSuggestions([]);
    } else if (e.key === 'ArrowDown' && suggestions?.users?.length > 0) {
      e.preventDefault();
      setActiveSuggestion((prevIndex) =>
        prevIndex < suggestions.users.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === 'ArrowUp' && suggestions?.users?.length > 0) {
      e.preventDefault();
      setActiveSuggestion((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (
      e.key === 'Enter' &&
      activeSuggestion >= 0 &&
      activeSuggestion < suggestions.users.length
    ) {
      handleSelectUser(suggestions.users[activeSuggestion]);
    }
  };

  return (
    <div style={{ width: '50%' }}>
      {/* Pills */}
      {/* input field with search suggestions */}
      <Grid
        width='100%'
        display='flex'
        justifyContent='start'
        alignItems='center'>
        {selectedUsers.map((user) => (
          <Pill
            key={user.email}
            image={user.image}
            text={`${user.firstName} ${user.lastName}`}
            onClick={() => handleRemoveUser(user)}
          />
        ))}
        <Grid
          display='flex'
          flexDirection='column'>
          <TextField
            ref={inputRef}
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search For a User...'
            onKeyDown={handleKeyDown}
          />
          <List
            style={{
              maxHeight: '300px',
              overflowY: 'scroll',
              marginTop: '60px',
              listStyle: 'none',
              padding: '0',
              margin: '0',
              position: 'absolute',
              backgroundColor: '#fff',
              border: '1px solid #ccc',
            }}>
            {suggestions?.users?.map(
              (user, index) =>
                !selectedUserSet.has(user.email) && (
                  <ListItem
                    key={user.email}
                    onClick={() => handleSelectUser(user)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 10px',
                      cursor: 'pointer',
                      borderBottom: '1px solid #ccc',
                    }}>
                    <ListItemAvatar>
                      <Avatar
                        src={user.image}
                        alt={`${user.firstName} ${user.lastName}`}
                      />
                    </ListItemAvatar>
                    <span>{`${user.firstName} ${user.lastName}`}</span>
                  </ListItem>
                )
            )}
          </List>
        </Grid>
      </Grid>
      {/* Search Suggestions */}
    </div>
  );
};

export default MultiselectorInbox;
