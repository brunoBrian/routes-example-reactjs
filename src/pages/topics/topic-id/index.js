import React from 'react';
import {useParams, Link, Switch, Route} from 'react-router-dom';

function TopicId() {
  let { topicId } = useParams();

  return (
    <div>
      <h2>Aqui é outra rota dos tópicos - topics/{topicId}</h2>
      <h3>Requested topic ID: {topicId}</h3>
    </div>
  )
}

export default TopicId;