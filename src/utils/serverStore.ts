
type RoomStore = Map<string, Set<string>>;

const roomStore: RoomStore = new Map();

export const addClientToRoom = (roomId: string, clientId: string): void => {
  if (!roomStore.has(roomId)) {
    roomStore.set(roomId, new Set());
  }
  const room = roomStore.get(roomId);
  room?.add(clientId);
};

export const removeClientFromRoom = (roomId: string, clientId: string): void => {
  if (roomStore.has(roomId)) {
    const room = roomStore.get(roomId);
    room?.delete(clientId);

    if (room && room.size === 0) {
      roomStore.delete(roomId); 
    }
  }
};

export const getClientsInRoom = (roomId: string): string[] => {
  return roomStore.has(roomId) ? Array.from(roomStore.get(roomId)!) : [];
};

export const getRoomStore = (): RoomStore => {
  return roomStore;
};
