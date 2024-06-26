import "./style.css";
import { PoliciesApiFactory } from "./generated-client";
import axios from "axios";

const instance = axios.create({});
const factory = PoliciesApiFactory(
  undefined,
  "http://localhost:8080",
  instance,
);

document.querySelector("#tailorings")!.addEventListener("click", async () => {
  factory.tailorings({
    policyId: "random-policy-id",
    limit: 5,
  });
});


document.querySelector("#policies")!.addEventListener("click", async () => {
  factory.policies({
    limit: 5,
    offset: 0,
  });
});
