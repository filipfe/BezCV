from django.db import models
from apps.Candidates.models import Candidates, Abilities

import uuid


class QuestionCategories(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = 'Question Categories'

    def __str__(self):
        return '{} | {}'.format(
            self.pk,
            self.name
        )


class Questions(models.Model):
    text = models.CharField(max_length=255)
    category = models.ManyToManyField(QuestionCategories)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Questions'

    def __str__(self):
        categories = ", ".join([category.name for category in self.category.all()])
        return '{} | {} | {}'.format(
            self.pk,
            self.text,
            categories,
        )
    
    
class CandidateAnswers(models.Model):
    question = models.ForeignKey(Questions, on_delete=models.CASCADE, related_name='candidateanswers_question')
    candidate = models.ForeignKey(Candidates, on_delete=models.CASCADE)
    answer = models.PositiveSmallIntegerField(
        choices=(
            (1, "Zdecydowanie nie"),
            (2, "Raczej nie"),
            (3, "Nie mam zdania"),
            (5, "Raczej tak"),
            (6, "Zdecydowanie tak"),
        ))
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Candidate answers'
        unique_together = [['question', 'candidate']]

    def __str__(self):
        return '{} | {}'.format(
            self.pk,
            self.answer
        )
    

class AbilityQuestions(models.Model):
    question = models.ForeignKey(Questions, on_delete=models.CASCADE, related_name='abilityquestions_question')
    ability = models.ForeignKey(Abilities, on_delete=models.CASCADE, related_name='abilityquestions_ability')
    reverse_values = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Ability questions'
        unique_together = [['question', 'ability']]

    def __str__(self):
        return '{} | {} | {}'.format(
            self.pk,
            self.question,
            self.ability
        )
    

class GeneratedCodes(models.Model):
    code = models.UUIDField(default=uuid.uuid4, unique=True)
    candidate = models.ForeignKey(Candidates, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Generated codes'

    def __str__(self):
        return self.code