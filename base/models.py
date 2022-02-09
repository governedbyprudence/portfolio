from django.db import models

# Create your models here.
class project(models.Model):
    name=models.CharField(max_length=30)
    link=models.URLField()
    desc=models.TextField(max_length=400,default="d")
    pic=models.URLField(default="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hpdsrTb2AqrQj8PWZbQzkwHaHa%26pid%3DApi&f=1")
