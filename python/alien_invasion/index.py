from settings import Settings
from ship import Ship
import game_functions as gf
import pygame

# from pygame.sprite import Group


def run_game():
    pygame.init()
    ai_settings = Settings()
    screen = pygame.display.set_mode(
        (ai_settings.screen_width, ai_settings.screen_height))
    pygame.display.set_caption("外星人入侵")
    # 创建一个飞船
    ship = Ship(screen)
    # 创建一个用与存储子弹的组
    # bullets = Group()

    while True:
        gf.check_events(ship, ai_settings, screen)
        ship.update()
        # bullets.update()
        gf.update_screen(ship, ai_settings, screen)


run_game()
