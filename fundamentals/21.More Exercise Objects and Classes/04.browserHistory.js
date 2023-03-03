function browserHistory(obj, act) {
  for (let action of act) {
    let parts = action.split(" ");
    let keyword = parts[0];
    let site = parts[1];
    if (action === "Clear History and Cache") {
      obj["Open Tabs"] = [];
      obj["Browser Logs"] = [];
      obj["Recently Closed"] = [];
      continue;
    }
    switch (keyword) {
      case "Open":
        obj["Open Tabs"].push(site);
        obj[`Browser Logs`].push(action);
        break;
      case "Close":
        let index = obj["Open Tabs"].indexOf(site);
        if (index > -1) {
          obj[`Open Tabs`].splice(index, 1);
          obj[`Browser Logs`].push(action);
          obj["Recently Closed"].push(site);
        }
        break;
    }
  }
  console.log(`${obj[`Browser Name`]}`);
  console.log(`Open Tabs: ${obj[`Open Tabs`].join(", ")}`);
  console.log(`Recently Closed: ${obj[`Recently Closed`].join(", ")}`);
  console.log(`Browser Logs: ${obj[`Browser Logs`].join(", ")}`);
}
browserHistory(
  {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": [
      "Open YouTube",
      "Open Yahoo",
      "Open Google Translate",
      "Close Yahoo",
      "Open Gmail",
      "Close Gmail",
      "Open Facebook",
    ],
  },
  ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
