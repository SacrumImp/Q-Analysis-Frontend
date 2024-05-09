export enum EMethods {
  Casti = "1",
  Duckstein = "2",
}

export const MethodsLabels = new Map<string, string>([
  [EMethods.Casti, "following J.Casti"],
  [EMethods.Duckstein, "following L.Duckstein"],
])