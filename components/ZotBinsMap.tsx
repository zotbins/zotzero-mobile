import BinStatusModal from "@/components/BinStatusModal";
import Mapbox, {
  Camera,
  LocationPuck,
  MapView,
  PointAnnotation,
} from "@rnmapbox/maps";
import React, { useRef, useState } from "react";
import { Image, View } from "react-native";
import ZotBinsLogo from "../assets/images/zotbins_logo.png";
import { markers } from "../assets/markers.js";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOXACCESSTOKEN as string);
Mapbox.setTelemetryEnabled(false);

const ZotBinsMap = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [activeBinName, setActiveBinName] = useState("");

  // make type more specific instead of "any"
  const markerRefs: { [key: string]: any } = useRef({});

  const closeModal = () => {
    setDisplayModal(false);
    setActiveBinName("");
  };

  return (
    <View className="w-full h-full">
      <MapView
        styleURL="mapbox://styles/mapbox/streets-v12"
        style={{ flex: 1 }}
        zoomEnabled={true}
        rotateEnabled={true}
        scaleBarEnabled={false}
      >
        <Camera
          zoomLevel={14}
          centerCoordinate={[-117.84272383250185, 33.646044797114584]}
          pitch={0}
          animationMode={"flyTo"}
          animationDuration={500}
        />

        <LocationPuck
          puckBearingEnabled
          puckBearing="heading"
          pulsing={{ isEnabled: true }}
        />

        {/* <ShapeSource id="zotbins" shape={} */}

        {markers.map((marker) => (
          <PointAnnotation
            ref={(ref) => (markerRefs.current[marker.name] = ref)}
            key={marker.name}
            id={marker.name}
            coordinate={[marker.longitude, marker.latitude]}
            onSelected={() => {
              setDisplayModal(true);
              setActiveBinName(marker.name);
            }}
          >
            <Image
              source={ZotBinsLogo}
              resizeMode="contain"
              className={`h-12 w-12`}
              onLoad={() => markerRefs.current[marker.name]?.refresh()}
            />
          </PointAnnotation>
        ))}
      </MapView>
      {displayModal && (
        <View className="justify-center items-center">
          <BinStatusModal name={activeBinName} closeModal={closeModal} />
        </View>
      )}
    </View>
  );
};

export default ZotBinsMap;
