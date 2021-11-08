import pygame
import os
path = os.path.abspath('.')


class Ship():
    def __init__(self, screen):
        self.screen = screen
        self.image = pygame.image.load(
            os.path.join(path, 'images', 'ship.bmp'))
        self.rect = self.image.get_rect()
        self.screen_rect = self.screen.get_rect()
        self.rect.centerx = self.screen_rect.centerx
        self.rect.bottom = self.screen_rect.bottom

        # 移动标志
        self.moving_right = False
        self.moving_left = False

    def update(self):
        # 根据移动标志调整飞船的位置
        if self.moving_right and self.rect.right < self.screen_rect.right:
            self.rect.centerx += 1
        if self.moving_left and self.rect.left > 0:
            self.rect.centerx -= 1

    def blitme(self):
        self.screen.blit(self.image, self.rect)
