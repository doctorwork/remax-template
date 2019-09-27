import React from "react";
import { connect } from "@remax/dva";
import { View, Text, Form } from "remax/base";
import { Container, FormItem } from "@/components";

export default connect()(() => {
  return (
    <Container>
      <FormItem label="GIT" />
      <FormItem label="TOKEN" />
    </Container>
  );
});
