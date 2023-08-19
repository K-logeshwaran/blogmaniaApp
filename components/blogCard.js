import { Card, Text, Button } from "react-native-paper";

import * as React from "react";
import { Avatar } from "react-native-paper";

const MyComponent = () => (
  <Avatar.Image
    size={40}
    source={{
      uri: "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    }}
  />
);

function Bcard({ title, content }) {
  return (
    <Card style={{ marginVertical: 10 }}>
      <Card.Title
        title={title}
        subtitle={new Date().toDateString()}
        titleVariant="titleLarge"
        left={MyComponent}
      />
      <Card.Cover style={{margin:10}} source={{ uri: "https://picsum.photos/700" }} />
      <Card.Content>
      <Text variant="headlineSmall" numberOfLines={4}>
          {title}
        </Text>
        <Text variant="bodyMedium" numberOfLines={4}>
          {content}
        </Text>
      </Card.Content>
    </Card>
  );
}

export default Bcard;
