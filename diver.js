class Diver
{
	constructor(firstName, lastName, amountDives, amountJudges, division) 
	{
		this.firstName = firstName;
		this.lastName = lastName;
		this.dives = Array(amountDives).fill(0);
		this.amountDives = amountDives;
		this.amountJudges = amountJudges;
		this.judgeScores = Array(amountDives).fill(Array(amountJudges).fill(0));
		this.indDiveScores = Array(amountDives).fill(0);
		this.totalScore = 0;
		this.division = division;
	}
	
	getDive(index)
	{
		return this.dives[index];
	}

	addDive(index, dive)
	{
		this.dives[index] = dive;
	}

	addJudgeScore(index, judgeNumber, score)
	{
		this.judgeScores[index][judgeNumber] = score;
	}

	getJudgeScore(index, judgeNumber)
	{
		return this.judgeScores[index][judgeNumber];
	}

	addIndDiveScore(index, score)
	{
		this.indDiveSCores[index] = score;
	}

	getIndDiveScore(index)
	{
		return this.indDiveScores[index];
	}

	getTotalScore()
	{
		return this.totalScore;
	}

	setTotalScore(score)
	{
		this.totalScore = this.totalScore + score;
	}

	getDivision()
	{
		return this.division;
	}
}

