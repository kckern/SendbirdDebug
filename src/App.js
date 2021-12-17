import React, { useState } from 'react';
import './App.css';
import SendBird from "sendbird";

function App() {

  const [members, setMembers] = useState([]);

  var sb = new SendBird({ appId: "386311F5-8923-4F4D-8BE1-C3E95C2AD963", localCacheEnabled: true });
  sb.connect("tytus", "da8107ba9a97a47cbba61e29085d1a160d44e46b", function (user, error) {
    if (error) {
      // Handle error.
    }

    sb.GroupChannel.getChannel("e7a4763dec356ef015782e5281cb95cf", function (groupChannel, error) {
      if (error) {
        // Handle error.
      }
      setMembers(groupChannel.members)
    });
  });

  return (
    <div className="App">
      <h1>Test IMGS</h1>
      <div className='imgs'>
      {members.map(member => <div><img alt="" src={member.profileUrl} /></div>)}
      </div>
    </div>
  );
}

export default App;
