from animal import Animal


class Dog(Animal):
    def __init__(self, name, age):
      self.name = name
      self.age = age
      super().__init__(name, age)

    def sit(self):
      print(self.name + ' is sit')


my_dog = Dog('xiong 2', 5)

my_dog.sit()
my_dog.sing()

print(my_dog.sex)
