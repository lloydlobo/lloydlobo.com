---
title: "Proxymate"
date: "2020-03-16T05:35:07.322Z"
coverImage: "/assets/projects/proxymate/cover.jpg"
excerpt: "The client for this application approached me because they were looking to create a product that allows drivers to quickly connect with mechanics when dealing with car problems. They also were loooking to enable hobbyist and mechanics unassociated with any particular shop the opportunity to gig-work and manage their own time. I was able to effectively create user personas, competitive audits, sketches, wireframes and a final prototype and send over final assets to an engineer in around three months."
ogImage:
  url: "/assets/projects/proxymate/cover.jng"
projectType: "personal"
repository: "https://github.com/lloydlobo/proxymate"
live: "https://dictionary-web-app-vert.vercel.app"
stack: "ReactJS NextJS TailwindCSS"
---

## Mission Statement

The ProxyMate Bot aims to help individuals maintain meaningful
conversations with their friends, even when they are not available,
by acting as their personal proxy.

## Description

The ProxyMate Bot is a Twitter and Discord bot that acts as a mirror for
individuals who want to learn more about themselves and improve their
social interactions. It allows individuals to maintain conversations
with their friends, even when they are busy, by providing a personal
proxy to represent them.

## Usage

To use the ProxyMate Bot, individuals can simply invite the bot to their
Twitter or Discord server, and then set up their personal preferences and
conversation topics. Whenever they are not available to talk, the bot will
act as their proxy and engage in conversations on their behalf. The bot
will also provide insights and feedback to help individuals understand
their communication style and improve their social skills.

## Essential Features

- Conversation Logging: The ProxyMate Bot will record all conversations it
  has on behalf of an individual, so they can review them later and learn
  from them.
- Customizable Preferences: Individuals can set up their personal preferences
  and conversation topics, so the bot can engage in conversations that align
  with their interests.
- Insight and Feedback: The bot will provide feedback and insights to help
  individuals understand their communication style and improve their social skills.
- Privacy and Security: The ProxyMate Bot will ensure that all conversations and
  personal information are kept secure and private, and will only engage in
  conversations with individuals who have explicitly granted it permission.

## Additional Features

- Smart Response: The bot can learn from the individual's past
  conversations and use that knowledge to provide more accurate and
  personalized responses.
- Personality Matching: The bot can match individuals with similar personalities,
  so they can engage in more meaningful conversations.
- Conversation Suggestions: The bot can suggest conversation topics and icebreakers
  to help individuals start conversations and keep them going.

### Logo

- The logo could be a simple silhouette of a person standing in front of a mirror.
  This represents the idea of the bot reflecting the user's personality back to them.
- Alternatively, the logo could be an abstract representation of a mirror or
  a person's profile.
- The text "ProxyMate Bot" can be written in bold and clean font, either below
  or next to the logo.

### Color palette

    A combination of blue and green can be used to represent growth and reflection.
    Another option could be using pastel colors like light blue, pink, and yellow. These colors are calming and reflect a friendly and approachable vibe.
    A monochromatic color scheme using shades of blue can be used to represent trustworthiness and professionalism.

### Other design elements

    The interface of the app can have a simple and clean design with intuitive navigation.
    The chat window can have a friendly and conversational tone, with the bot's responses being clear and easy to understand.
    Icons and graphics can be used to represent different features of the app.

## Architecture for the ProxiMate Bot

The ProxiMate Bot is designed to act as a proxy for a user on both
Twitter and Discord when they are not available.

The bot's primary function is to respond to messages and questions
directed at the user, allowing them to maintain a presence on both
platforms even when they are not actively using them.

### Overview

The ProxiMate Bot is built using the following technologies:

- Twitter API
- Discord API
- Python programming language - nltk / TextBlob library for natural language processing

The bot is hosted on a cloud server and runs continuously, monitoring
for new messages on both Twitter and Discord. When a message is received,
the bot uses natural language processing to determine the user's intent
and respond appropriately.

### High-Level Design

The ProxiMate Bot's architecture can be broken down into the following
components:

- Twitter and Discord API Integration: The bot integrates with both the
  Twitter and Discord APIs to receive and send messages on each platform.

- Natural Language Processing: The bot uses the TextBlob library to
  perform natural language processing on incoming messages to determine
  user intent and generate appropriate responses.

- Message Routing: Once the user's intent has been determined, the bot
  routes the message to the appropriate response handler.

- Response Handlers: These handlers generate responses to the user's
  message based on their intent. For example, if the user is asking
  a question, the bot will use a Q&A response handler to generate an
  appropriate response.

```mermaid
graph LR
A[main program] --> B[generate_post()]
B --> C[read text file]
B --> D[choose state size]
D --> E[random state size]
D --> F[fixed state size]
B --> G[generate sentence]
G --> H[short sentence]
G --> I[long sentence]
H --> J[add hashtag]
B --> K[post to Twitter]
```

### Deployment

The ProxiMate Bot is deployed on a cloud server using a Docker
container. The Docker container includes all necessary dependencies,
including Python and the required libraries.

To deploy the bot, the following steps are taken:

- Install Docker on the server
- Build the Docker container using the provided Dockerfile
- Start the container, which will automatically start the ProxiMate Bot

### Conclusion

The ProxiMate Bot is a useful tool for users who want to maintain a
presence on both Twitter and Discord even when they are not available. Its
architecture is designed to be scalable and easy to maintain, making it
a useful tool for individuals and organizations alike.
