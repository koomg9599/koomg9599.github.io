---
title: Perceptron
date: 2019-09-25 12:09:79
category: data mining
---

퍼셉트론에 대한 설명은 https://wikidocs.net/24958 이 곳에 진짜 잘 설명되어 있으니 참고하세요!

퍼셉트론을 이용하여 0부터9까지 숫자 인식 시스템을 만들었습니다.

코드는 이곳에 있습니다. <https://github.com/koomg9599/number-recognition-by-perceptron>

# number-recognition-system

number-recognition-system by perceptron

<img src="./images/perceptron_schematic_overview.png" width='500px'/>

## Data set

from 0 to 9 (7 x 5 Matrix)

<img src="./images/dataset.png"/>

## Steps

### 1. initialize weight and threshold

- weight = initialize 4 X 35 Matrix by 0.5
- threshold = 0

### 2. target value setting

distinguish from 0 to 9 by 4 bits

0: -1 -1 -1 -1 

1: -1 -1 -1 1 

2: -1 -1 1 -1 

3: -1 -1 1 1 

4: -1 1 -1 -1 

5: -1 1 -1 1 

6: -1 1 1 -1

7: -1 1 1 1 

8: 1 -1 -1 -1

9: 1 -1 -1 1 

10: 1 -1 1 -1

### 3. weight update

#### Activate Function

<img src="./images/step_function.png" width='300px'/>

<img src="./images/weight-func.jpg"/>

#### Update Function

<img src="./images/update_function.png"/>

## Result Weight

[[-7.5 2.5 2.5 -1.5 -3.5 4.5 0.5 0.5 -3.5 4.5 4.5 0.5 0.5 -3.5 4.5 -7.5 10.5 10.5 10.5 -13.5 4.5 0.5 0.5 -3.5 2.5 4.5 0.5 0.5 -3.5 2.5 -3.5 -3.5 -3.5 -7.5 -9.5],
[14.5 0.5 0.5 2.5 -5.5 -3.5 0.5 0.5 2.5 -17.5 -3.5 0.5 0.5 2.5 -17.5 -5.5 -3.5 -3.5 -3.5 8.5 -9.5 0.5 0.5 2.5 6.5 -9.5 0.5 0.5 2.5 6.5 0.5 0.5 0.5 2.5 6.5],
[20.5 -1.5 -1.5 -3.5 -15.5 -23.5 0.5 0.5 -1.5 -5.5 -23.5 0.5 0.5 -1.5 -5.5 0.5 2.5 2.5 2.5 6.5 -1.5 0.5 0.5 -1.5 -1.5 -1.5 0.5 0.5 -1.5 -1.5 2.5 2.5 2.5 0.5 8.5],
[-1.5 2.5 2.5 0.5 4.5 -3.5 0.5 0.5 -1.5 4.5 -3.5 0.5 0.5 -1.5 4.5 -1.5 0.5 0.5 0.5 0.5 -5.5 0.5 0.5 -1.5 4.5 -5.5 0.5 0.5 -1.5 4.5 -1.5 -1.5 -1.5 -3.5 2.5]]

## Checking

<img src="./images/check.png" height='650px'/>

## Testing

<img src="./images/sample_test.png"/>

## Code

### Update Weight

weight update function

it's learning step

<div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div><div style="line-height:130%">10</div><div style="line-height:130%">11</div><div style="line-height:130%">12</div><div style="line-height:130%">13</div><div style="line-height:130%">14</div><div style="line-height:130%">15</div><div style="line-height:130%">16</div><div style="line-height:130%">17</div><div style="line-height:130%">18</div><div style="line-height:130%">19</div><div style="line-height:130%">20</div><div style="line-height:130%">21</div><div style="line-height:130%">22</div><div style="line-height:130%">23</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#066de2">bool</span>&nbsp;learning(<span style="color:#066de2">vector</span><span style="color:#a71d5d">&lt;</span><span style="color:#066de2">int</span><span style="color:#a71d5d">&gt;</span>&nbsp;numV,&nbsp;<span style="color:#066de2">vector</span><span style="color:#a71d5d">&lt;</span><span style="color:#066de2">int</span><span style="color:#a71d5d">&gt;</span>&nbsp;answerV)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#066de2">vector</span><span style="color:#a71d5d">&lt;</span><span style="color:#066de2">int</span><span style="color:#a71d5d">&gt;</span>&nbsp;tmpAnswer(<span style="color:#0099cc">4</span>);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">for</span>&nbsp;(<span style="color:#066de2">int</span>&nbsp;i&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">0</span>;&nbsp;i&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>&nbsp;<span style="color:#0099cc">4</span>;&nbsp;i<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">+</span>)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#066de2">int</span>&nbsp;tmpSum&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">0</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">for</span>&nbsp;(<span style="color:#066de2">int</span>&nbsp;j&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">0</span>;&nbsp;j&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>&nbsp;<span style="color:#0099cc">35</span>;&nbsp;j<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">+</span>)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tmpSum&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;numV[j]&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">*</span>&nbsp;W[i][j];</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">if</span>&nbsp;(tmpSum&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;threshold)&nbsp;tmpAnswer[i]&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">1</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">else</span>&nbsp;tmpAnswer[i]&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">-</span><span style="color:#0099cc">1</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#066de2">int</span>&nbsp;tmpCount&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">0</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">for</span>&nbsp;(<span style="color:#066de2">int</span>&nbsp;i&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">0</span>;&nbsp;i&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>&nbsp;<span style="color:#0099cc">4</span>;&nbsp;i<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">+</span>)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">if</span>&nbsp;(tmpAnswer[i]&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span><span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;answerV[i])&nbsp;tmpCount<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">+</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">else</span>&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">for</span>&nbsp;(<span style="color:#066de2">int</span>&nbsp;j&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">0</span>;&nbsp;j&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>&nbsp;<span style="color:#0099cc">35</span>;&nbsp;j<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">+</span>)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;W[i][j]&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;n&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">*</span>&nbsp;(answerV[i]&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">-</span>&nbsp;tmpAnswer[i])&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">*</span>&nbsp;numV[j];</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">if</span>&nbsp;(tmpCount&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span><span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">4</span>)&nbsp;<span style="color:#a71d5d">return</span>&nbsp;<span style="color:#a71d5d">true</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">else</span>&nbsp;<span style="color:#a71d5d">return</span>&nbsp;<span style="color:#a71d5d">false</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div></div><div style="text-align:right;margin-top:-13px;margin-right:5px;font-size:9px;font-style:italic"><a href="http://colorscripter.com/info#e" target="_blank" style="color:#e5e5e5text-decoration:none">Colored by Color Scripter</a></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>

### Checking

checking function

<div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div><div style="line-height:130%">9</div><div style="line-height:130%">10</div><div style="line-height:130%">11</div><div style="line-height:130%">12</div><div style="line-height:130%">13</div><div style="line-height:130%">14</div><div style="line-height:130%">15</div><div style="line-height:130%">16</div><div style="line-height:130%">17</div><div style="line-height:130%">18</div><div style="line-height:130%">19</div><div style="line-height:130%">20</div><div style="line-height:130%">21</div><div style="line-height:130%">22</div><div style="line-height:130%">23</div><div style="line-height:130%">24</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">void</span>&nbsp;checking(<span style="color:#066de2">vector</span><span style="color:#a71d5d">&lt;</span><span style="color:#066de2">int</span><span style="color:#a71d5d">&gt;</span>&nbsp;sampleV)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#066de2">vector</span><span style="color:#a71d5d">&lt;</span><span style="color:#066de2">int</span><span style="color:#a71d5d">&gt;</span>&nbsp;tmpAnswer(<span style="color:#0099cc">4</span>);</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">for</span>&nbsp;(<span style="color:#066de2">int</span>&nbsp;i&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">0</span>;&nbsp;i&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>&nbsp;<span style="color:#0099cc">4</span>;&nbsp;i<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">+</span>)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#066de2">int</span>&nbsp;tmpSum&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">0</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">for</span>&nbsp;(<span style="color:#066de2">int</span>&nbsp;j&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">0</span>;&nbsp;j&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>&nbsp;<span style="color:#0099cc">35</span>;&nbsp;j<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">+</span>)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tmpSum&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;sampleV[j]&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">*</span>&nbsp;W[i][j];</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">if</span>&nbsp;(tmpSum&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&gt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;threshold)&nbsp;tmpAnswer[i]&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">1</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">else</span>&nbsp;tmpAnswer[i]&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">-</span><span style="color:#0099cc">1</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">for</span>&nbsp;(<span style="color:#066de2">int</span>&nbsp;j&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">0</span>;&nbsp;j&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>&nbsp;<span style="color:#0099cc">10</span>;&nbsp;j<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">+</span>)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#066de2">int</span>&nbsp;tmpCount&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">0</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">for</span>&nbsp;(<span style="color:#066de2">int</span>&nbsp;i&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">0</span>;&nbsp;i&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>&nbsp;<span style="color:#0099cc">4</span>;&nbsp;i<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">+</span>)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">if</span>&nbsp;(tmpAnswer[i]&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span><span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;answer[j][i])&nbsp;tmpCount<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">+</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">if</span>&nbsp;(tmpCount&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span><span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">4</span>)&nbsp;{</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#066de2">cout</span>&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>&nbsp;<span style="color:#63a35c">"answer:&nbsp;"</span>&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>&nbsp;j&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>&nbsp;<span style="color:#066de2">endl</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">return</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#066de2">cout</span>&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>&nbsp;<span style="color:#63a35c">"no&nbsp;matching"</span>&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span>&nbsp;<span style="color:#066de2">endl</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#a71d5d">return</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div></div><div style="text-align:right;margin-top:-13px;margin-right:5px;font-size:9px;font-style:italic"><a href="http://colorscripter.com/info#e" target="_blank" style="color:#e5e5e5text-decoration:none">Colored by Color Scripter</a></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>

### Reference

- https://pythonmachinelearning.pro/perceptrons-the-first-neural-networks/
- https://wikidocs.net/24958