// 远程配置选项
export const REMOTE_CONFIGS = [
  {
    label: "universal",
    options: [
      {
        label: "No-Urltest",
        value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/no-urltest.ini"
      },
      {
        label: "Urltest",
        value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/urltest.ini"
      }
    ]
  },
  {
    // ACL4SSR 配置
    label: "ACL4SSR",
    options: [
      { label: 'ACL4SSR Online', value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini', },
      { label: 'ACL4SSR Online Full', value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini', },
      { label: 'ACL4SSR Online Full NoAuto', value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/refs/heads/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini', },
      { label: 'ACL4SSR Online Full Netflix', value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/refs/heads/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini', }
    ]
  },
  {
    // Aethersailor Rules
    label: "Aethersailor",
    options: [
      { label: "Custom_Clash", value: "https://raw.githubusercontent.com/Aethersailor/Custom_OpenClash_Rules/refs/heads/main/cfg/Custom_Clash.ini" },
      { label: "Custom_Clash_Lite", value: "https://raw.githubusercontent.com/Aethersailor/Custom_OpenClash_Rules/refs/heads/main/cfg/Custom_Clash_Lite.ini" },
      { label: "Custom_Clash_GFW", value: "https://raw.githubusercontent.com/Aethersailor/Custom_OpenClash_Rules/refs/heads/main/cfg/Custom_Clash_GFW.ini" },
      { label: "Custom_Clash_Full", value: "https://raw.githubusercontent.com/Aethersailor/Custom_OpenClash_Rules/refs/heads/main/cfg/Custom_Clash_Full.ini" },
    ]
  },
  {
    label: "customized",
    options: [
      { label: "Maying", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/maying.ini" },
      { label: "Ytoo", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini" },
      { label: "FlowerCloud", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini" },
      { label: "Nexitally", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini" },
      { label: "SoCloud", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini" },
      { label: "ARK", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini" },
      { label: "ssrCloud", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini" }
    ]
  },
  {
    label: "Special",
    options: [
      { label: "NeteaseUnblock(仅规则，No-Urltest)", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini" },
      { label: "Basic(仅GEOIP CN + Final)", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini" }
    ]
  }
];
