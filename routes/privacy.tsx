import { Head } from "$fresh/runtime.ts";
import PrivacyPage from "../islands/PrivacyPage.tsx";

export default function PrivacyRoute() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Tunny</title>
        <meta
          name="description"
          content="Review Tunny's Privacy Policy."
        />
      </Head>
      <PrivacyPage />
    </>
  );
}