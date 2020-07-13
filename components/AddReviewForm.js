import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import CustButton from "./CustButton";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-to-5", "Enter a number 1-5", (value) => {
      return parseInt(value) < 6 && parseInt(value) > 0;
    }),
});

const AddReviewForm = ({ addReview }) => {
  const submitHandler = (values, actions) => {
    addReview(values);
    // actions are used to clear the inputs (reset the form)
    // we close the modal so we don't need that because it happens automatically
    // but in other cases when we leave the view with the form open:
    actions.resetForm();
  };

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => submitHandler(values, actions)}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={formikProps.handleChange("title")}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Review notes"
              onChangeText={formikProps.handleChange("body")}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.body && formikProps.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={formikProps.handleChange("rating")}
              value={formikProps.values.rating}
              keyboardType="numeric"
              onBlur={formikProps.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>

            {/* <Button
              title="Submit"
              color="maroon"
              onPress={formikProps.handleSubmit}
            /> */}
            <CustButton text="submit" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddReviewForm;
