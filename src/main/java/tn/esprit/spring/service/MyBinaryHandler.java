package tn.esprit.spring.service;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.BinaryMessage;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.BinaryWebSocketHandler;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.logging.Logger;

@Component

public class MyBinaryHandler extends BinaryWebSocketHandler {
    private Logger logger = Logger.getLogger(WebSocketHandler.class.getName());
    List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();
    public void handleBinaryMessage(WebSocketSession session, BinaryMessage message) {
    try {
           // logger.info("A TRACE Message binary1");
           // logger.info(message.getPayload().toString());
          //  logger.info("A TRACE Message binary2");
          for(WebSocketSession webSocketSession : sessions) {
                webSocketSession.sendMessage(message);
             // logger.info("A TRACE Message binary4");
            }

       } catch (IOException e) {
            e.printStackTrace();
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
    }
}
