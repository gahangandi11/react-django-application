from django.db import models

# Create your models here.
class Student(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    student_id = models.CharField(max_length=10, unique=True)
    age = models.IntegerField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Teacher(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    teacher_id = models.CharField(max_length=10, unique=True)
    department = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"