#!/bin/bash
json-server test/api/db.json --static ./ --middlewares test/js/middleware-journeys.js
