import Image from "next/image";
import { Stack, Link } from "@mui/material";

export default function StoreButtons() {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      mb={3}
      margin={2}
    >
      <Link
        href="https://play.google.com/store/apps/details?id=com.BlackwellGlobalInvestmentsUKLimited.pelican&hl=en"
        target="_blank"
        rel="noopener"
      >
        <Image
          src="/google-play.jpg"
          alt="Google Play"
          width={160}
          height={50}
          className="rounded-xl"
        />
      </Link>
      <Link
        href="https://apps.apple.com/gb/app/blackwell-invest/id1666036351"
        target="_blank"
        rel="noopener"
      >
        <Image
          src="/app-store.jpg"
          alt="App Store"
          width={160}
          height={50}
          className="rounded-xl"
        />
      </Link>
    </Stack>
  );
}
