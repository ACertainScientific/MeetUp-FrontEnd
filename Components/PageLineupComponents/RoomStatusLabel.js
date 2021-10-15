import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
    ROOM_STATUS_OCCUPIED,
    ROOM_STATUS_CLEANING,
    ROOM_STATUS_UNSANITIZED,
    ROOM_STATUS_SANITIZED,
    ROOM_STATUS_VACANT,
    ROOM_STATUS_OCCUPIED_COLOR,
    ROOM_STATUS_CLEANING_COLOR,
    ROOM_STATUS_UNSANITIZED_COLOR,
    ROOM_STATUS_SANITIZED_COLOR,
    ROOM_STATUS_VACANT_COLOR,
} from "../../Constants/RoomStatusConstants.js";

const RoomStatusLabel = (param) => {
    const statusHandler = () => {
        switch (param.currentStatus) {
            case ROOM_STATUS_OCCUPIED:
                return ROOM_STATUS_OCCUPIED_COLOR;
            case ROOM_STATUS_VACANT:
                return ROOM_STATUS_VACANT_COLOR;
            case ROOM_STATUS_SANITIZED:
                return ROOM_STATUS_SANITIZED_COLOR;
            case ROOM_STATUS_UNSANITIZED:
                return ROOM_STATUS_UNSANITIZED_COLOR;
            case ROOM_STATUS_CLEANING:
                return ROOM_STATUS_CLEANING_COLOR;
        }
    };

    return (
        <View
            style={{
                margin: "10px",
                padding: "10px",
                borderWidth: 2,
                borderColor: statusHandler(),
                borderRadius: "10px",
                color: statusHandler(),
                width: "120px",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={{ color: statusHandler() }}>
                {param.currentStatus}
            </Text>
        </View>
    );
};
export default RoomStatusLabel;
