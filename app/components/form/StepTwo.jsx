"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  GoogleMap,
  useJsApiLoader,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { ChevronDownIcon } from "@chakra-ui/icons";
const StepTwo = (props) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const [map, setMap] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [addressInfo, setAddressInfo] = React.useState(null);
  const [searchBox, setSearchBox] = useState(null);
  const [center, setCenter] = useState({
    lat: 8.846304228928693,
    lng: 8.761794333984389,
  });
  const [showGoogleMap, setShowGoogleMap] = useState(false);
  const [zipCode, setZipCode] = useState("");
  //  const [mapLoaded, setMapLoaded] = useState(false);

  const onLoad = (ref) => {
    setSearchBox(ref);
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
    libraries: ["places"],
  });

  const onPlacesChanged = async () => {
    if (searchBox) {
      const places = await searchBox.getPlaces();
      if (places.length === 0) return;

      const bounds = new window.google.maps.LatLngBounds();
      await places.forEach((place) => {
        if (place.geometry && place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      await map.fitBounds(bounds);
      setCenter({
        lat: places[0].geometry.location.lat(),
        lng: places[0].geometry.location.lng(),
      });
      setMarkerPosition({
        lat: places[0].geometry.location.lat(),
        lng: places[0].geometry.location.lng(),
      });
    }
  };

  //Run this function when the button is clicked, the clicked Function fields would be set to the latitude and longitude
  const onClick = (e) => {
    const clickedLocation = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    // console.log(clickedLocation);

    //The Geocode service takes in an object of the longitude and latitude and returns the address(Which is an array of objects) then we extract the address of the clicked location
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: clickedLocation }, (results, status) => {
      if (status == "OK") {
        if (results[0]) {
          // console.log(results);
          setAddressInfo(results[0].formatted_address); // Output the formatted address
          // props.setFormData({
          //   ...props.formData,
          //   address: results[0].formatted_address,
          // });

          props.setAddress(results[0].formatted_address);

          const postalCode = results[0].address_components.find(function (
            component
          ) {
            props.setFormData({
              ...props.formData,
              address: addressInfo,
            });
            return component.types[0] == "postal_code";
          });
          setZipCode(postalCode?.long_name || postalCode?.short_name || "");
          props.setZipCode(
            postalCode?.long_name || postalCode?.short_name || ""
          );
          // console.log(postalCode.long_name, "postal code");
        } else {
          console.log("No results found");
        }
      } else {
        console.log("Geocoder failed due to: " + status);
      }
    });
  };

  const handleChange = (e) => {
    const { name, address, value } = e.target;
    console.log(name, "handle value");

    props?.setFormData({
      ...props?.formData,
      name: name,
      email: email,
    });
  };

  // console.log(zipCode, "zipcode");

  return (
    <FormControl
      display="flex"
      flexDirection="column"
      justifyContent="space-around "
      // border="2px green solid"
      width={{ base: "100%", md: "80%", lg: "80%", xl: "80%", "2xl": "100%" }}
      maxW={{
        base: "95%",
        sm: "95%",
        md: "80%",
        lg: "90%",
        xl: "90%",
        "2xl": "600px",
      }}
      m="0 auto"
      height="100%"
      isRequired
    >
      <Box>
        <Heading
          fontSize={{ base: "27px", lg: "35px", "2xl": "40px " }}
          colorScheme=" hsl(213, 96%, 18%) "
        >
          Enter Your Address
        </Heading>
        <Text m="20px auto" color="hsl(231, 11%, 63%)">
          {" "}
          Please provide your location
        </Text>
        <Stack spacing="20px ">
          <Box>
            <FormLabel fontSize="18">Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              fontSize="18px"
              mt="8px"
              padding="8px 15px "
              borderRadius="6px"
              outline="none"
              width="100% "
              border="1px solid  hsl(229, 24%, 87%)"
              _placeholder={{
                opacity: 0.8,
                color: "gray.500",
                fontFamily: "Ubuntu",
              }}
              onChange={(e) => {
                props.setFormData({
                  ...props.formData,
                  name: e.target.value,
                });
              }}
              defaultValue={props.name}
            />
          </Box>
          <Box>
            <FormLabel fontSize="18">Email Address </FormLabel>
            <Input
              type="text"
              size="md"
              fontSize="18px"
              mt="8px"
              borderRadius="6px "
              outline="none"
              padding="8px 15px "
              border="1px solid  hsl(229, 24%, 87%)"
              width="100% "
              placeholder="Enter email"
              _placeholder={{
                opacity: 0.8,
                color: "gray.500",
                fontFamily: "Ubuntu",
              }}
              onChange={(e) => {
                props.setFormData({
                  ...props.formData,
                  email: e.target.value,
                });
              }}
              // defaultValue={props.email}
            />
          </Box>

          <Box position="relative">
            <FormLabel>Enter your Address </FormLabel>
            <InputGroup mt="8px" border="1px solid  hsl(229, 24%, 87%)">
              <Input
                type="text"
                size="md"
                disabled
                border="none"
                backgroundColor="white"
                fontSize="18px"
                w="100%"
                borderRadius="6px"
                outline="none "
                padding="8px 15px "
                width="100% "
                placeholder={addressInfo ? addressInfo : "Enter address "}
                _placeholder={{
                  opacity: 0.8,
                  color: "gray.500",
                  fontFamily: "Ubuntu",
                }}
                onChange={(e) => {
                  props.setFormData({
                    ...props.formData,
                    address: addressInfo,
                  });
                }}
                defaultValue={addressInfo}
              />
              <InputRightAddon p="0">
                <IconButton
                  onClick={() => setShowGoogleMap(!showGoogleMap)}
                  colorScheme="blue"
                  border="none"
                  outline="none"
                  height="100%"
                  cursor="pointer"
                  aria-label="use maps"
                  icon={<ChevronDownIcon fontSize="24px " />}
                />
              </InputRightAddon>
            </InputGroup>
            {showGoogleMap && (
              <Box
                position="absolute"
                bottom="-550px "
                left="0"
                zIndex="1"
                w="100%"
                h="550px"
              >
                {isLoaded && (
                  <div>
                    <StandaloneSearchBox
                      onLoad={onLoad}
                      onPlacesChanged={onPlacesChanged}
                    >
                      <input
                        type="text"
                        placeholder={
                          addressInfo ? addressInfo : "Search for location"
                        }
                        style={{
                          boxSizing: `border-box`,
                          border: `1px solid transparent`,
                          width: `300px`,
                          height: `32px`,
                          padding: `0 12px`,
                          borderRadius: `3px`,
                          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                          fontSize: `14px`,
                          outline: `none`,
                          textOverflow: `ellipses`,
                        }}
                      />
                    </StandaloneSearchBox>
                    <GoogleMap
                      id="search-box-map"
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={8}
                      onClick={onClick}
                      onLoad={(map) => setMap(map)}
                      // onLoad={onLoad}
                    >
                      {markerPosition && <Marker position={markerPosition} />}
                    </GoogleMap>
                  </div>
                )}
              </Box>
            )}
          </Box>
          <Box>
            <FormLabel fontSize="18">Zip code </FormLabel>
            <Input
              type="text"
              required
              size="md"
              fontSize="18px"
              mt="8px"
              borderRadius="6px "
              outline="none"
              padding="8px 15px "
              border="1px solid  hsl(229, 24%, 87%)"
              width="100% "
              placeholder={zipCode ? zipCode : "Enter your Zip code"}
              _placeholder={{
                opacity: 0.8,
                color: "gray.500",
                fontFamily: "Ubuntu",
              }}
              onChange={(e) =>
                props.setFormData({
                  ...props.formData,
                  zipCode: e.target.value,
                })
              }
              // defaultValue={zipCode}
            />
          </Box>
        </Stack>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Button
          type="submit"
          color="white"
          fontSize={{ base: "16px", lg: "18px", "2xl": "20px " }}
          borderRadius="7px "
          backgroundColor="hsl(213, 96%, 18%)"
          padding="10px 20px"
          border="none"
          outline="none"
          cursor="pointer"
          onClick={() => props?.setStep(1)}
        >
          Previous
        </Button>
        <Button
          type="submit"
          color="white"
          fontSize={{ base: "16px", lg: "18px", "2xl": "20px " }}
          borderRadius="7px "
          backgroundColor="hsl(213, 96%, 18%)"
          padding="10px 20px"
          border="none"
          outline="none"
          cursor="pointer"
          onClick={() => props?.setStep(3)}
        >
          Next
        </Button>
      </Box>
    </FormControl>
  );
};

export default StepTwo;
