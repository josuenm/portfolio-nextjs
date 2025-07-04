import { Analytics } from "@vercel/analytics/react";
import axios from "axios";
import { useEffect } from "react";
import { UAParser } from "ua-parser-js";

export function AnalyticsWrapper() {
  useEffect(() => {
    (async () => {
      if (process.env.NODE_ENV === "development") {
        return;
      }

      let parser = UAParser(navigator.userAgent);

      const res = await axios.get(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.GEO_IP_KEY}`
      );

      if (res.status === 200) {
        const data = {
          browser: parser.browser,
          os: parser.os,
          referrer: document.referrer,
          location: {
            city: res.data.city,
            country: res.data.country_name,
            state: res.data.state_prov,
          },
        };

        await axios.post(`${process.env.ANALYTIC_URL}/insert`, {
          ...data,
        });
      }
    })();
  }, []);

  return <Analytics />;
}
