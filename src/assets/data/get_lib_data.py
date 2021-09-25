import requests
import json

lib_resp = requests.get(" http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=2DB66E555C426E2CABF278214B754FE6&steamid=76561198070402936&include_appinfo=true&include_played_free_games=true&format=json")
library_data = lib_resp.json()

total_playtime = 0

for game in library_data["response"]["games"]:
    game["playtime_forever"] = round((game["playtime_forever"] / 60), 2)
    total_playtime += game["playtime_forever"]
    game["img_logo_url"] = "https://media.steampowered.com/steamcommunity/public/images/apps/" + str(game["appid"]) +"/" + game["img_logo_url"] +".jpg"
    api_call = "https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=" + str(game["appid"]) + "&count=4&format=json"
    game["news"] = requests.get(api_call).json()

library_data["response"]["total_playtime"] = round(total_playtime,2)

with open('library_data.json', 'w', encoding='utf-8') as f:
    json.dump(library_data, f, ensure_ascii=False, indent=4)
