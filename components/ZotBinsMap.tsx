import React, { useRef } from "react";
import Mapbox, {
  Camera,
  LocationPuck,
  MapView,
  PointAnnotation,
  ShapeSource,
} from "@rnmapbox/maps";
import { View, Image } from "react-native";
import { markers } from "../assets/markers.js";
import ZotBinsLogo from "../assets/images/zotbins_logo.png";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOXACCESSTOKEN as string);
Mapbox.setTelemetryEnabled(false);

const ZotBinsMap = () => {
  // make type more specific instead of "any"
  const markerRefs: { [key: string]: any } = useRef({});
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
            onSelected={() => alert(marker.name + " Bin Selected!")}
          >
            <Image
              source={ZotBinsLogo}
              resizeMode="contain"
              className="h-12 w-12"
              onLoad={() => markerRefs.current[marker.name]?.refresh()}
            />
          </PointAnnotation>
        ))}
      </MapView>
    </View>
  );
};

export default ZotBinsMap;
