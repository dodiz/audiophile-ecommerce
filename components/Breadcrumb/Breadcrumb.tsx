import { useRouter } from "next/navigation";
import { Typography } from "@/ui";
import styles from "./Breadcrumb.module.scss";

export const Breadcrumb = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.back()}>
      <Typography variant="body" className={styles.breadcrumb}>
        Go Back
      </Typography>
    </div>
  );
};
