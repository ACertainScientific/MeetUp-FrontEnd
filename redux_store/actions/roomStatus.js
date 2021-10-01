export const ROOM_SANITIZED = "ROOM_SANITIZED";

export const RoomSanitized = () => {
    return { type: ROOM_SANITIZED, roomSanitized: "OCCUPIED" };
};

export const ROOM_OCCUPIED = "ROOM_OCCUPIED";

export const RoomOccupied = () => {
    return { type: ROOM_OCCUPIED, roomOccupied: "UNSANITIZED" };
};

export const ROOM_UNSANITIZED = "ROOM_UNSANITIZED";

export const RoomUnsanitized = () => {
    return { type: ROOM_UNSANITIZED, roomUnsanitized: "SANITIZED" };
};