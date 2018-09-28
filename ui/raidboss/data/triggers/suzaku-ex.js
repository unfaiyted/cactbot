'use strict';

// Suzaku Extreme
[{
  zoneRegex: /^Hells\' Kier \(Extreme\)$/,
  timelineFile: 'suzaku-ex.txt',
  triggers: [
    {
      id: 'SuzEx Cremate',
      regex: / 14:32D1:Suzaku starts using Cremate on (\y{Name})/,
      alertText: function(data, matches) {
        if (matches[1] == data.me) {
          return {
            en: 'Tank Buster on YOU',
            de: 'Tenkbuster auf DIR',
            fr: 'Tankbuster sur VOUS',
          };
        }
        if (data.role == 'healer') {
          return {
            en: 'Buster on ' + data.ShortName(matches[1]),
            de: 'Tenkbuster auf ' + data.ShortName(matches[1]),
            fr: 'Tankbuster sur ' + data.ShortName(matches[1]),
          };
        }
      },
      tts: function(data, matches) {
        if (matches[1] == data.me) {
          return {
            en: 'buster',
            de: 'basta',
            fr: 'tankbuster',
          };
        }
      },
      groupTTS: function(data, matches) {
      return {
            en: 'Buster on ' + data.ShortName(matches[1]),
        }
      }
    },
    {
      id: 'SuzEx Phantom Flurry',
      regex: / 14:32DC:Suzaku starts using/,
      condition: function(data) {
        return data.role == 'tank' || data.role == 'healer';
      },
      alertText: {
        en: 'Tank Buster',
        de: 'Tenkbuster',
        fr: 'Tankbuster ',
      },
      tts: function(data, matches) {
        if (matches[1] == data.me) {
          return {
            en: 'buster',
            de: 'basta',
            fr: 'tankbuster',
          };
        }
      },
      groupTTS: function(data, matches) {
           return {
            en: "tank buster"
           };
      },
    },
    {
      id: 'SuzEx Mesmerizing Melody',
      regex: / 14:32DA:Suzaku starts using Mesmerizing Melody/,
      alertText: {
        en: 'Get Out',
      },
    },
    {
      id: 'SuzEx Ruthless Refrain',
      regex: / 14:32DB:Suzaku starts using Ruthless Refrain/,
      alertText: {
        en: 'Get In',
      },
    },
  ],
}];
