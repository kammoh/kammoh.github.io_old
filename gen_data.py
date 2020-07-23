import json
import random

with open('data.txt', 'r') as f:
  data = json.load(f)
  
  first = data['data'][0]
  
  for i in range(2000):
    new_item = dict(first)
    new_item['Result ID'] = 500+i
    new_item['Algorithm'] = f'{chr(i%26+ord("a"))}_fake_alg{i}'
    new_item['Freq (MHz)'] = round(random.uniform(50,300),1)
    new_item['(Enc/Auth TP)/LUT (Mbits/s/LUT)'] = round(random.uniform(5, 55), 2)
    new_item['LUTs'] = random.randint(700,3000)
    
    data['data'].append(new_item)
  
  

  with open('data2.txt', 'w') as json_file:
    json.dump(data, json_file)
