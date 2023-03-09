import { fetcher } from "@/helpers/fetcher";
import useSWR from "swr";

import { NextApiRequest, NextApiResponse } from "next";
import { fortunerData } from "@/utils/fortune";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(fortunerData)) {
      throw new Error("Cannot find user data");
    }

    res.status(200).json(fortunerData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
