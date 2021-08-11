import pygame
from pygame.sprite import Sprite
import os
path = os.path.abspath('.')


class Alien(Sprite):
    def __init__(self, ai_settings, screen):
        super(Alien, self).__init__()

        self.ai_settings = ai_settings
        self.screen = screen

        # 加载外星人
        self.image = pygame.image.load(
            os.path.join(path, 'images', 'alien.bmp'))

        self.rect = self.image.get_rect()

        self.rect.x = self.rect.width
        self.rect.y = self.rect.height

    def blitme(self):
        self.screen.blit(self.image, self.rect)

    def update(self):
        self.x += self.ai_settings.alien_speed_factor * self.ai_settings.fleet_direction
        self.rect.x = self.x

    def check_edges(self):
        screen_rect = self.screen.get_rect()
        if self.rect.right >= screen_rect.right:
            return True
        elif self.rect.left <= 0:
            return True
