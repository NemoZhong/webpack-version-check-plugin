type BuildOptions = {
  assetsPath: string;
  versionDirectory?: string;
};
declare module '@wyny/set-version-plugin' {
  export function VersionBuildPlugin(options: BuildOptions): void;
  export function VersionUpdateCheck(version: string, JSONUrl?: string): any;
  export const VERSION: string;
}
