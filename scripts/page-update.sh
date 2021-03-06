#!/bin/bash

API="http://localhost:4741"
URL_PATH="/pages"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "page": {
      "header": "'"${HEADER}"'",
      "body": "'"${BODY}"'",
      "footer": "'"${FOOTER}"'"
    }
  }'

echo
