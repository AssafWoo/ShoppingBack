import { Injectable } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

// shoppingList.gateway.ts
@Injectable()
@WebSocketGateway({
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class ShoppingListGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  @SubscribeMessage('updateProductStatus')
  handleProductStatusUpdate(client: Socket, updatedProduct: any) {
    // Log the data for debugging
    console.log(
      'Received updateProductStatus event with data:',
      updatedProduct,
    );

    // Broadcast the updated product status to all clients except the sender
    client.broadcast.emit('productStatusUpdated', updatedProduct);
  }

  @SubscribeMessage('markAsRetrieved')
  markProductAsRetrieved(client: Socket, payload: { productId: string }) {
    // Broadcast the product ID that was retrieved to all clients except the sender
    client.broadcast.emit('productRetrieved', payload.productId);
  }

  // New method to send list updates
  sendListUpdate(event: string, data: any) {
    this.server.emit(event, data);
  }

  @SubscribeMessage('deleteListItem')
  handleDeleteListItem(
    client: Socket,
    payload: { listId: string; productId: string },
  ) {
    // Broadcast the product ID that was deleted to all clients except the sender
    client.broadcast.emit('listItemDeleted', {
      listId: payload.listId,
      productId: payload.productId,
    });
  }
}
