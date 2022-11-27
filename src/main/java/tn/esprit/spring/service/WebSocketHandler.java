package tn.esprit.spring.service;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class WebSocketHandler extends TextWebSocketHandler {
/*
  private Logger logger = Logger.getLogger(WebSocketHandler.class.getName());

  List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

  @Override
  public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
    logger.info("Sending message: " + message.getPayload() + " to " + sessions.size() + " sessions.");
    for(WebSocketSession webSocketSession : sessions) {
      webSocketSession.sendMessage(message);
      logger.info("A TRACE Message ");
    }
  }

  @Override
  public void afterConnectionEstablished(WebSocketSession session) {
    sessions.add(session);
    logger.info("Added Websocket session, total number of sessions are " + sessions.size());
  }

  @Override
  public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
    sessions.remove(session);
    logger.info("Removed Websocket session, total number of sessions are " + sessions.size());
  }*/
}