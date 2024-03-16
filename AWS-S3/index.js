import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    //nodejs user security credentials
    accessKeyId: "AKIA5FTY7Y4D252FRTLJ", //user access key
    secretAccessKey: "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", //user access secret
  },
});

async function getObjectUrl(key) {
  const command = new GetObjectCommand({
    Bucket: "presignned-private",
    Key: key,
  });

  const url = await getSignedUrl(s3Client, command, {
    // expiresIn: 30,
    signingDate: "",
    // signableHeaders: "",
    // signingRegion: "ap-south-1",
    // signingService: ""
  }); // We use another option in this function like expiresIn etc.
  return url;
}

async function init() {
  console.log("Turnamt url : ", await getObjectUrl("Turnamt.png"));
}

init();
