interface LoadingState {
  type: "loading";
  data: string[];
}

interface ErrprState {
  type: "error";
  message: string[];
}

type FetchStatus = LoadingState | ErrprState;
// type StatusType = "loading" | "error";
type StatusType = FetchStatus["type"];
