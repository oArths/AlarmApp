import * as r from "react-native";
import * as I from "@expo/vector-icons";
import React, { useState } from "react";
import { TimerPickerModal } from "react-native-timer-picker";
import { LinearGradient } from "expo-linear-gradient"; 

export default function HomeScreen() {
  const [showPicker, setShowPicker] = useState(false);
  const [alarmString, setAlarmString] = useState<string | null>(null);

  const formatTime = ({
    hours,
    minutes,
  }: {
    hours?: number;
    minutes?: number;

  }) => {
    const timeParts = [];

    if (hours !== undefined) {
      timeParts.push(hours.toString().padStart(2, "0"));
    }
    if (minutes !== undefined) {
      timeParts.push(minutes.toString().padStart(2, "0"));
    }

    return timeParts.join(":");
  };
  return (
    <r.View className="h-full bg-red-500 pt-10 flex items-center">
      <r.View className="flex items-center justify-start  bg-slate-100 rounded w-4/5 h-auto">
        <r.Text className="text-2xl">Adicione um Alarme</r.Text>
        {/* <I.AntDesign name="plus" color="#000" size={24}/> */}
        <r.TextInput
          className=" w-4/5  py-2 px-4 border-2 rounded  text-xl "
          placeholder="Digite o nome do Remedio"
        />
        <r.View
          style={{
            backgroundColor: "#514242",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <r.TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowPicker(true)}
          >
            <r.View style={{ alignItems: "center" }}>
              {alarmString !== null ? (
                <r.Text style={{ color: "#F1F1F1", fontSize: 30 }}>
                  {alarmString !== ""
                    ? alarmString.split(":")[0] +
                      ":" +
                      alarmString.split(":")[1]
                    : ""}
                </r.Text>
              ) : null}
              <r.TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowPicker(true)}
              >
                <r.View style={{ marginTop: 30 }}>
                  <r.Text
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 18,
                      borderWidth: 1,
                      borderRadius: 10,
                      fontSize: 16,
                      overflow: "hidden",
                      borderColor: "#C2C2C2",
                      color: "#C2C2C2",
                    }}
                  >
                    {"Defina o horario de inicio"}
                  </r.Text>
                </r.View>
              </r.TouchableOpacity>
            </r.View>
          </r.TouchableOpacity>
          <TimerPickerModal
            visible={showPicker}
            hideSeconds={true}
            hourLabel=""
            minuteLabel=""
            setIsVisible={setShowPicker}
            onConfirm={(pickedDuration) => {
              setAlarmString(formatTime(pickedDuration));
              setShowPicker(false);
            }}
            modalTitle="Defina o inicio"
            onCancel={() => setShowPicker(false)}
            closeOnOverlayPress
            LinearGradient={LinearGradient}
            styles={{
              theme: "dark",
            }}
            modalProps={{
              overlayOpacity: 0.2,
            }}
          />
        </r.View>
      </r.View>
    </r.View>
  );
}
