export enum EMethods {
  Casti = "0",
  Duckstein = "1",
}

export const MethodsLabels = new Map<string, string>([
  [EMethods.Casti, "following J.Casti"],
  [EMethods.Duckstein, "following L.Duckstein"],
])