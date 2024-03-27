"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import {
  GoogleMap,
  useJsApiLoader,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import "./form.css";
import "react-international-phone/style.css";
import axios from "axios";
import { PhoneInput } from "react-international-phone";
import { PhoneNumberUtil } from "google-libphonenumber";

const StepThree = (props) => {
  const [map, setMap] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [addressInfo, setAddressInfo] = React.useState(null);
  const [searchBox, setSearchBox] = useState(null);
  const [center, setCenter] = useState({
    lat: 8.846304228928693,
    lng: 8.761794333984389,
  });
  const [showGoogleMap, setShowGoogleMap] = useState(false);
  const [validate, setValidate] = useState(false);
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [fillFields, setFillFields] = useState(false);
  const [phone, setPhone] = useState("");
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

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
    console.log("clicked");

    const clickedLocation = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };

    //The Geocode service takes in an object of the longitude and latitude and returns the address(Which is an array of objects) then we extract the address of the clicked location
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: clickedLocation }, (results, status) => {
      if (status == "OK") {
        if (results[0]) {
          console.log(results[0].formatted_address);
          setAddressInfo(results[0].formatted_address); // Output the formatted address
          props.setFormData({
            ...props.formData,
            address: results[0].formatted_address,
          });

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
          // setZipCode(postalCode?.long_name || postalCode?.short_name || "");
          // props.setZipCode(
          //   postalCode?.long_name || postalCode?.short_name || ""
          // );
          // console.log(postalCode.long_name, "postal code");
        } else {
          console.log("No results found");
        }
      } else {
        console.log("Geocoder failed due to: " + status);
      }
    });
  };

  const phoneUtil = PhoneNumberUtil.getInstance();

  const isPhoneValid = (phone) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };

  const isValid = isPhoneValid(props.formData.telephone);

  const submitForm = async () => {
    console.log(props.formData, "prev formdata");
    try {
      setValidate(true);
      setTimeout(() => {
        setValidate(false);
      }, 10000);

      if (
        props.formData.email &&
        props.formData.name &&
        props.formData.surname &&
        props.formData.telephone &&
        props.formData.address &&
        isValid
      ) {
        setLoading(true);
        // props?.setStep(4);
        console.log(props.formData, "form data");
        var myHeaders = new Headers();
        myHeaders.append(
          "apikey",
          `${process.env.NEXT_PUBLIC_API_KEY_Verify_Email}`
        );

        var requestOptions = {
          method: "GET",
          redirect: "follow",
          headers: myHeaders,
        };

        await fetch(
          `https://api.apilayer.com/email_verification/${props.formData.email}`,
          requestOptions
        )
          .then((response) => {
            if (response.status === 200) {
              setLoading(false);
              props?.setStep(4);
            } else if (response.status === 401) {
              setLoading(false);
              console.log("Unauthorized - Invalid authentication credentials");
            } else if (response.status === 400) {
              setLoading(false);
              console.log("Bad request - Invalid email format");
            } else {
              setLoading(false);
              console.log(`An error occurred: ${response.status}`);
            }
          })
          .catch((error) => console.log("error", error));
      } else {
        console.log("Please fill all the fields");
        setFillFields(true);
        setTimeout(() => {
          setFillFields(false);
        }, 4000);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // const handleChange = (e) => {
  //   props.setFormData({
  //     ...props.formData,
  //     telephone: e.target.value,
  //   });
  // };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ height: "100%" }}
      >
        <FormControl
          display="flex"
          flexDirection="column"
          justifyContent="space-around "
          width={{
            base: "100%",
            md: "80%",
            lg: "80%",
            xl: "80%",
            "2xl": "100%",
          }}
          maxW={{
            base: "95%",
            sm: "95%",
            md: "80%",
            lg: "90%",
            xl: "90%",
            "2xl": "600px",
          }}
          m="0 auto"
          minHeight="100%"
          isRequired
        >
          <Box>
            <Heading
              fontSize={{ base: "27px", lg: "35px", "2xl": "40px " }}
              colorScheme=" hsl(213, 96%, 18%) "
            >
              Personal Info{" "}
            </Heading>
            <Text m="20px auto" color="hsl(231, 11%, 63%)">
              {" "}
              Please provide your name, email address and phone number etc.{" "}
            </Text>

            <Stack spacing="20px ">
              <Box>
                <FormLabel fontSize="18">Name</FormLabel>
                <Input
                  type="text"
                  isRequired
                  placeholder={
                    props.formData.name
                      ? props.formData.name
                      : "Enter your name"
                  }
                  fontSize="18px"
                  mt="8px"
                  padding="8px 15px "
                  borderRadius="6px"
                  outline="none"
                  width="100% "
                  textTransform="capitalize"
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
                  defaultValue={props.formData.name}
                />
              </Box>

              <Box>
                <FormLabel fontSize="18">Surname</FormLabel>
                <Input
                  type="text"
                  placeholder={
                    props.formData.surname
                      ? props.formData.surname
                      : "Enter your surname"
                  }
                  isRequired
                  fontSize="18px"
                  mt="8px"
                  padding="8px 15px "
                  borderRadius="6px"
                  outline="none"
                  width="100% "
                  border="1px solid  hsl(229, 24%, 87%)"
                  textTransform="capitalize"
                  _placeholder={{
                    opacity: 0.8,
                    color: "gray.500",
                    fontFamily: "Ubuntu",
                  }}
                  onChange={(e) => {
                    props.setFormData({
                      ...props.formData,
                      surname: e.target.value,
                    });
                  }}
                  defaultValue={props.surname}
                />
              </Box>

              <Box position="relative">
                <FormLabel>Enter your Address </FormLabel>
                <InputGroup mt="10px" border="1px solid  hsl(229, 24%, 87%)">
                  <Input
                    type="text"
                    isRequired
                    size="md"
                    // disabled
                    border="none"
                    backgroundColor="white"
                    fontSize="18px"
                    w="100%"
                    borderRadius="6px"
                    outline="none "
                    padding="8px 15px "
                    width="100% "
                    placeholder={
                      props.formData.address
                        ? props.formData.address
                        : "Enter address "
                    }
                    _placeholder={{
                      opacity: 0.8,
                      color: "gray.500",
                      fontFamily: "Ubuntu",
                    }}
                    onChange={(e) => {
                      props.setFormData({
                        ...props.formData,
                        address: addressInfo,
                      }) ||
                        props.setFormData({
                          ...props.formData,
                          address: e.target.value,
                        });
                    }}
                    // defaultValue={props.formData.address}
                    defaultValue={props.formData.address}
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
                        >
                          {markerPosition && (
                            <Marker position={markerPosition} />
                          )}
                        </GoogleMap>
                      </div>
                    )}
                  </Box>
                )}
              </Box>

              <Box>
                <FormLabel fontSize="18">Telephone </FormLabel>

                <PhoneInput
                  defaultCountry="ng"
                  required
                  placeholder={
                    props?.formData.telephone
                      ? props?.formData.telephone
                      : "Enter telephone"
                  }
                  style={{
                    marginTop: "8px",
                    fontSize: "18px",
                    width: "100%",
                    borderRadius: "6px",
                    outline: "none",
                  }}
                  inputStyle={{
                    width: "100%",
                    padding: "10px 5px",
                    fontSize: "18px",
                  }}
                  value={props.formData.telephone}
                  // onChange={handleChange}
                  onChange={(e) =>
                    props.setFormData({
                      ...props.formData,
                      telephone: e,
                    })
                  }
                  // onChange={(phone) => setPhone(phone)}
                />
              </Box>

              <Box>
                <FormLabel fontSize="18">Email </FormLabel>
                <Input
                  type="email"
                  size="md"
                  fontSize="18px"
                  mt="8px"
                  borderRadius="6px "
                  outline="none"
                  padding="8px 15px "
                  border="1px solid  hsl(229, 24%, 87%)"
                  width="100% "
                  placeholder={
                    props.formData.email ? props.formData.email : "Enter email"
                  }
                  _placeholder={{
                    opacity: 0.8,
                    color: "gray.500",
                    fontFamily: "Ubuntu",
                  }}
                  // onChange={(e) => setEmail(e.target.value)}
                  onChange={(e) => {
                    props.setFormData({
                      ...props.formData,
                      email: e.target.value,
                    });
                  }}
                />
              </Box>
              {validate ? (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ color: "red", margin: "0 auto" }}
                >
                  {!props.formData.name ? (
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      *your name must be present*
                    </motion.li>
                  ) : (
                    ""
                  )}
                  {!props.formData.surname ? (
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      *your surname must be present*
                    </motion.li>
                  ) : (
                    ""
                  )}

                  {!props.formData.address ? (
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      *you must have an address*
                    </motion.li>
                  ) : (
                    ""
                  )}
                  {!isValid ? (
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      *Use a valid telephone number*
                    </motion.li>
                  ) : (
                    ""
                  )}
                  {!props.formData.telephone ? (
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      *your telephone must be present*
                    </motion.li>
                  ) : (
                    ""
                  )}
                  {!props.formData.email ? (
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      *your email must be present*
                    </motion.li>
                  ) : (
                    ""
                  )}
                  {props.formData.email.includes("@") == false ? (
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      *your must use a valid email*
                    </motion.li>
                  ) : (
                    ""
                  )}
                </motion.ul>
              ) : (
                ""
              )}
              {/* {fillFields ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ color: "red", textAlign: "center" }}
                >
                  *Please fill all necessary fields*{" "}
                </motion.p>
              ) : (
                ""
              )} */}
            </Stack>
          </Box>

          <Box
            w="full"
            m="40px auto"
            display="flex"
            justifyContent="space-between"
          >
            <Button
              // type="submit"
              color="white"
              fontSize={{ base: "16px", lg: "18px", "2xl": "20px " }}
              borderRadius="7px "
              backgroundColor="hsl(213, 96%, 18%)"
              padding="10px 20px"
              border="none"
              outline="none"
              cursor="pointer"
              _hover={{
                backgroundColor: "hsl(213, 96%, 50%)",
              }}
              onClick={() => props?.setStep(1)}
            >
              Previous
            </Button>
            {loading ? (
              <Button
                color="white"
                borderRadius="7px "
                fontSize={{ base: "16px", lg: "18px", "2xl": "20px " }}
                backgroundColor="hsl(213, 96%, 18%)"
                padding="10px 20px"
                border="none"
                outline="none"
                cursor="pointer"
                _hover={{
                  backgroundColor: "hsl(213, 96%, 50%)",
                }}
              >
                <span className="loader"></span>
              </Button>
            ) : (
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
                _hover={{
                  backgroundColor: "hsl(213, 96%, 50%)",
                }}
                onClick={submitForm}
              >
                Next
              </Button>
            )}
          </Box>
        </FormControl>
      </motion.div>
    </AnimatePresence>
  );
};

export default StepThree;
