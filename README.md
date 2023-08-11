# 📊 Analyze Metrics and Make Possible Choices for College KRS 
---

Created with :heart: by [Rehan Dias Pratama](https://www.instagram.com/rehandiazz/).

This project was created as part of the Chapter 23 problem solving. It involves three main components that aim to perform metric analysis on JavaScript code and generate unique course schedule possibilities.

## 📝 Description 

This project aims to provide a solution to the problem in Chapter 23 by applying metric analysis to JavaScript code and generating various timetables that satisfy the given constraints.

## 💻 Code Usage 

[`source.js`]

The `source.js` file reads and analyzes Halstead metrics from JavaScript source code. Halstead metrics are used to measure the complexity and size of code based on different operators and operands, as well as total operators and operands.

[`siklomatik.js`]

The `siklomatik.js` file calculates the cyclomatic complexity of JavaScript source code. Cyclomatic complexity measures how complex the control flow is in the program code, taking into account control structures such as if, switch, for, and others.

[`jadwal.js`]

The `jadwal.js` file utilizes the course, time, and classroom data provided in the JSON file to generate various possible lecture schedules. It avoids duplication of courses in the schedule and generates unique schedule variations.

## 🚀 How to use 

You can use these three scripts to perform metric analysis on JavaScript code and generate unique course schedules.

## 🔧 Installation 

Make sure you have Node.js installed on your computer.

```bash
git clone https://github.com/RehanDiasTEST/RPLchapter23.git
cd RPLchapter23
```

## 🏃 How to Run 

Run each script with the following command:

```bash
node source.js
```

```bash
node siklomatik.js
```

```bash
node jadwal.js
```

## ⚠️ Warning ⚠️ 

The code contained in this repository is still in the early stages of development. Most functionality may not be implemented or running correctly yet. So there may still be errors or bugs.
