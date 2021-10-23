import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, Button } from "react-native";
import { DUMMYDATA, DUMMYDATA_BUILDING, DUMMYDATA_ROOM } from "../../Data/DummyData";
import DropDownPicker from "react-native-dropdown-picker";
import THEME_COLOR from "../../Constants/Color";
import BuildingDBHandler from "../../Models/DatabaseRelated/BuildingDBHandler";

const GroupedSelector = param => {

    function range(startAt = 0, endAt = 1) {
        startAt = parseInt(startAt)
        endAt = parseInt(endAt)
        var size = endAt - startAt + 1
        var result = []
        for (var i of [...Array(size).keys()].map(i => i + startAt)) {
            result.push({ label: i, value: i })
        }
        return result
    }

    // Building
    const [buildingFullList, setBuildingFullList] = useState([])
    const [buildingListItems, setBuildingListItems] = useState([])
    const [buildingListValues, setBuildingListValues] = useState([])
    const [buildingListOpen, setBuildingListOpen] = useState(false)

    // Floor
    const [floorListItems, setFloorListItems] = useState([])
    const [floorListValues, setFloorListValues] = useState([])
    const [floorListOpens, setFloorListOpens] = useState(false)

    // Room
    const [roomListItems, setRoomListItems] = useState([])
    const [roomListValues, setRoomListValues] = useState([])
    const [roomListOpen, setRoomListOpen] = useState(false)

    useEffect(() => {

        // Building fetching
        var BuildingData = DUMMYDATA_BUILDING

        setBuildingListItems(BuildingData.map((thisBuilding) => {
            return { label: thisBuilding.name, value: thisBuilding.id }
        }))
        setBuildingFullList(BuildingData)
    }, [DUMMYDATA_BUILDING])


    const floorHandler = (value) => {
        for (var build of buildingFullList) {
            if (build.id == value) {
                console.log(range(build.floorStart, build.floorEnd))
                setFloorListItems(range(build.floorStart, build.floorEnd))
                break
            }
        }
        setFloorListValues([])
    }

    const roomHandler = () => {
        var RoomData = DUMMYDATA_ROOM
        var roomList = []
        for (var room of RoomData) {
            if (room.buildingId == buildingListValues && room.floor == floorListValues) {
                roomList.push({ label: room.roomName, value: room.id })
            }
        }
        setRoomListItems(roomList)
        setRoomListValues([])
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <DropDownPicker
                    // Getter and Setters
                    open={buildingListOpen}
                    value={buildingListValues}
                    items={buildingListItems}
                    setOpen={setBuildingListOpen}
                    setValue={setBuildingListValues}
                    setItems={setBuildingListItems}
                    onChangeValue={(value) => {
                        console.log(value)
                        floorHandler(value)
                    }}
                    // Searchable
                    searchable={true}
                    // Styles
                    style={styles.main}
                    textStyle={styles.textStyle}
                    placeholder={
                        "Select Building"
                    }
                />
            </View>
            <View style={styles.box}>
                <DropDownPicker
                    // Getter and Setters
                    open={floorListOpens}
                    value={floorListValues}
                    items={floorListItems}
                    setOpen={setFloorListOpens}
                    setValue={setFloorListValues}
                    setItems={setFloorListItems}
                    onChangeValue={() => {
                        roomHandler()
                    }}
                    // Searchable
                    searchable={true}
                    // Styles
                    style={styles.main}
                    textStyle={styles.textStyle}
                    placeholder={
                        "Select Floor"
                    }
                />
            </View>
            <View style={styles.box}>
                <DropDownPicker
                    // Getter and Setters
                    open={roomListOpen}
                    value={roomListValues}
                    items={roomListItems}
                    setOpen={setRoomListOpen}
                    setValue={setRoomListValues}
                    setItems={setRoomListItems}
                    // Searchable
                    searchable={true}
                    // Styles
                    style={styles.main}
                    textStyle={styles.textStyle}
                    placeholder={
                        "Select Room"
                    }
                />
            </View>
            <View style={{ borderRadius: "10px", overflow: "hidden", alignItems: "center", margin: "10px" }}>
                <Button
                    title="Submit!"
                    onPress={() => {
                        console.log("Pressed")
                        console.log("BuildingId: ", buildingListValues)
                        console.log("FloorNo: ", floorListValues)
                        console.log("RoomID: ", roomListValues)
                        param.onSubmit
                    }}
                    color={THEME_COLOR.main}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        width: "230px"
    },
    main: {
        backgroundColor: "#eee",
        borderRadius: "10px",
        padding: '5px',
        margin: "5px"
    },
    textStyle: {
        fontSize: 18,
        color: '#555',
        fontStyle: "italic",
        fontWeight: 'bold'
    }
})

export default GroupedSelector