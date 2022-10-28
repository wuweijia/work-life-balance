#coding=utf-8
import requests
import json
import threading
import time
class postrequests():
    def __init__(self):
        
        self.url = 'http://localhost:3000/popopet/card' #请求链接
        self.list = [{
            "id": "632a817c637df2231741806e",
            "barcode": "100-0049-1036",
            "type": "PET_VARIETY_CARD",
            "style": "样式",
            "petCardId": "6320294b22a04b160d8276a2",
            "sort": 3,
            "curColor": "#F36D10",
            "cardImg":{
                "color" : "#F36D10",
                "url" : "https://assets-cgc.23mofang.com/cms-metadata/2022/09/13/5Q18335dda8ba/1663056062650_duchu-00-25-red.png"
            },
          "name":"斗牛犬",
            "varietyInfos": [
                {
                    "name": "斗牛犬",
                    "percent": 80
                },
            ],
            "originalCard": [
                {
                    "color": "#0080A8",
                    "url": "https://assets-cgc.23mofang.com/cms-metadata/2022/09/13/Sg18335a14963/1663052106083_breed-80.png"
                }
            ],
            "result": [
                {
                    "color": "#0080A8",
                    "url": "http://oss-mofang-testimages.oss-cn-beijing.aliyuncs.com/popopet/tOSLkwwN.png"
                }
            ]
        },{
            "id": "632a817c637df2231741806e",
            "barcode": "100-0049-1036",
            "type": "PET_VARIETY_CARD",
            "style": "样式",
            "petCardId": "6320294b22a04b160d8276a2",
            "sort": 3,
            "curColor": "#597364",
            "cardImg":{
                "color" : "#597364",
                "url" : "https://assets-cgc.23mofang.com/cms-metadata/2022/09/13/5Q18335dda8ba/1663056062650_duchu-00-25-red.png"
            },
          "name":"二哈",
            "varietyInfos": [
                {
                    "name": "斗牛犬",
                    "percent": 80
                },
            ],
            "originalCard": [
                {
                    "color": "#0080A8",
                    "url": "https://assets-cgc.23mofang.com/cms-metadata/2022/09/13/Sg18335a14963/1663052106083_breed-80.png"
                }
            ],
            "result": [
                {
                    "color": "#0080A8",
                    "url": "http://oss-mofang-testimages.oss-cn-beijing.aliyuncs.com/popopet/tOSLkwwN.png"
                }
            ]
        },{
            "id": "632a817c637df2231741806e",
            "barcode": "100-0049-1036",
            "type": "PET_VARIETY_CARD",
            "style": "样式一",
            "petCardId": "6320294b22a04b160d8276a2",
            "sort": 3,
            "curColor": "#2B27AD",
            "cardImg":{
                "color" : "#2B27AD",
                "url" : "https://assets-cgc.23mofang.com/cms-metadata/2022/09/13/5Q18335dda8ba/1663056062650_duchu-00-25-red.png"
            },
          "name":"啸天犬",
          "varietyInfos": [
              {
                  "name": "斗牛犬",
                  "percent": 80
              },
          ],
        }]
 
    def post(self, number_rows):
        try:
            print(number_rows)
            self.data = self.list[number_rows]  #传递参数
            self.headers = {'content-type': 'application/json'} #请求头
            self.data = json.dumps(self.data)
            r = requests.post(self.url, self.data, headers=self.headers)
            print(r.text)
        except Exception as e:
            print(e)
 
def kquan_bf(i):
    login = postrequests()
    return login.post(i)
    
 
try:
    i = 0
    # 开启线程数目
    tasks_number = 3
    print('测试启动')
    time1 = time.perf_counter()
    while i < tasks_number:
        t = threading.Thread(target=kquan_bf(i))
        t.start()
        i +=1
    time2 = time.perf_counter()
    times = time2 - time1
    print(times/tasks_number) #每次请求用时
except Exception as e:
    print(e)  #请求结果